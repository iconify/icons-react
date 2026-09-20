import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":320};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.modbayy2a {
  fill: var(--svg-color--212121, #212121);
  d: path("M0 0v320h128v-48H48V45.333h160V224h-80v48h128V0z");
}
</style><path class="modbayy2a"/>`,
		"fallback": "logos:pagekit",
	});
}

export default Component;

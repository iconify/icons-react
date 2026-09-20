import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.snc3baboy {
  fill: var(--svg-color--7e43ff, #7e43ff);
  d: path("m12 3l7.941 4.5v9l-7.94 4.5l-7.942-4.5v-9z");
}
</style><path class="snc3baboy"/>`,
		"fallback": "token-branded:kin",
	});
}

export default Component;

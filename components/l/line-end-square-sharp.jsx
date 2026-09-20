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
		"content": `<style>.zi8qtf5tx {
  fill: currentColor;
  d: path("M12.577 15.923V12.5h-9.5v-1h9.5V8.077h7.846v7.846z");
}
</style><path class="zi8qtf5tx"/>`,
		"fallback": "material-symbols-light:line-end-square-sharp",
	});
}

export default Component;

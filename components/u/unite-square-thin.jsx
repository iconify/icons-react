import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s0x7s08nn {
  fill: currentColor;
  d: path("M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-62.34 120L44 102.34V49.66L206.34 212Zm-104-168h52.68L212 153.66v52.68ZM212 142.34L169.66 100H212Zm-56-56L113.66 44H156ZM44 113.66L86.34 156H44Zm56 56L142.34 212H100Z");
}
</style><path class="s0x7s08nn"/>`,
		"fallback": "ph:unite-square-thin",
	});
}

export default Component;

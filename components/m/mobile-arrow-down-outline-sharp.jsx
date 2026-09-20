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
		"content": `<style>.c5jatfe6w {
  fill: currentColor;
  d: path("M12 15.308L15.308 12l-.708-.708l-2.1 2.089V8.692h-1v4.689l-2.1-2.089l-.708.708zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="c5jatfe6w"/>`,
		"fallback": "material-symbols-light:mobile-arrow-down-outline-sharp",
	});
}

export default Component;

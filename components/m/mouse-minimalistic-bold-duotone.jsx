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
		"content": `<style>.pzl1-q55o {
  fill: currentColor;
  d: path("M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z");
}

.vcnfpbj7d {
  fill: currentColor;
  d: path("M19 15V9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="vcnfpbj7d"/><path class="pzl1-q55o"/>`,
		"fallback": "solar:mouse-minimalistic-bold-duotone",
	});
}

export default Component;

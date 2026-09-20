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
		"content": `<style>.veo_bac0u {
  fill: currentColor;
  d: path("M224 212h-29.2a83.2 83.2 0 0 0 25.2-60a84.1 84.1 0 0 0-80-83.9V32a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V76.11A76 76 0 0 1 182.64 212H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8m-92-76a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-60 44a4 4 0 0 1 0-8h64a4 4 0 0 1 0 8Z");
}
</style><path class="veo_bac0u"/>`,
		"fallback": "ph:microscope-thin",
	});
}

export default Component;

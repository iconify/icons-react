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
		"content": `<style>.m07f954uv {
  fill: currentColor;
  d: path("M192 28a4 4 0 0 0-4 4v36H68V32a4 4 0 0 0-8 0v192a4 4 0 0 0 8 0v-36h120v36a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-4 48v48H68V76ZM68 180v-48h120v48Z");
}
</style><path class="m07f954uv"/>`,
		"fallback": "ph:ladder-simple-thin",
	});
}

export default Component;

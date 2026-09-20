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
		"content": `<style>.urlm46wrb {
  fill: currentColor;
  d: path("M150 216a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M222 48v160a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h17.51L46 54.48V72a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-14-2H54.49L210 201.52V48a2 2 0 0 0-2-2");
}
</style><path class="urlm46wrb"/>`,
		"fallback": "ph:selection-inverse-light",
	});
}

export default Component;

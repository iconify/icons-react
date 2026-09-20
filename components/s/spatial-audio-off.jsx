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
		"content": `<style>.n-n3z2tlu {
  fill: currentColor;
  d: path("m18.75 13.75l1.4-1.4q-1-1-1.562-2.287t-.563-2.713t.563-2.7t1.562-2.275l-1.4-1.45q-1.275 1.275-2 2.95t-.725 3.475t.725 3.463t2 2.937m2.8-2.85l1.4-1.4q-.425-.425-.675-.975t-.25-1.175t.25-1.175t.675-.975l-1.4-1.425q-.725.725-1.125 1.625t-.4 1.925t.4 1.95T21.55 10.9M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2V21z");
}
</style><path class="n-n3z2tlu"/>`,
		"fallback": "material-symbols:spatial-audio-off",
	});
}

export default Component;

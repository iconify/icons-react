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
		"content": `<style>.e60r381fh {
  fill: currentColor;
  d: path("M2 20v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.625 0 1.25.088t1.25.212v1.575q-1.125.55-1.812 1.45T10 18.675V20zm10 0v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm3.225-5.725Q14.5 13.55 14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15t-1.775-.725m-8.05-3.45Q6 9.65 6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12t-2.825-1.175");
}
</style><path class="e60r381fh"/>`,
		"fallback": "material-symbols:supervisor-account",
	});
}

export default Component;

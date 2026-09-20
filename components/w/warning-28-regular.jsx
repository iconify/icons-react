import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x9b-u5b3c {
  fill: currentColor;
  d: path("M10.738 4.896c1.438-2.528 5.083-2.528 6.52 0l8.243 14.502c1.42 2.5-.384 5.603-3.26 5.603H5.756c-2.876 0-4.681-3.103-3.26-5.603zm5.216.742c-.863-1.517-3.05-1.517-3.912 0L3.8 20.14c-.853 1.5.23 3.361 1.956 3.361H22.24c1.725 0 2.808-1.861 1.956-3.361zM14 18a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 14 9");
}
</style><path class="x9b-u5b3c"/>`,
		"fallback": "fluent:warning-28-regular",
	});
}

export default Component;

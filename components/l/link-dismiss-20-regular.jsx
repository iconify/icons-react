import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j21fx5bkp {
  fill: currentColor;
  d: path("M8 4a.5.5 0 0 1 .09.992L8 5H6a3 3 0 0 0-.197 5.994L6 11h2a.5.5 0 0 1 .09.992L8 12H6a4 4 0 0 1-.22-7.994L6 4zm6 0a4 4 0 0 1 3.52 5.902a5.5 5.5 0 0 0-.883-.471a3 3 0 0 0-2.44-4.424L14 5h-2a.5.5 0 0 1-.09-.992L12 4zM6 7.5h8a.5.5 0 0 1 .09.992L14 8.5H6a.5.5 0 0 1-.09-.992zm13 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.732-1.06a.5.5 0 0 0-.707-.708l-1.061 1.06l-1.06-1.06a.5.5 0 0 0-.708.707l1.06 1.061l-1.06 1.06a.5.5 0 0 0 .707.708l1.061-1.06l1.06 1.06a.5.5 0 0 0 .708-.707l-1.06-1.061z");
}
</style><path class="j21fx5bkp"/>`,
		"fallback": "fluent:link-dismiss-20-regular",
	});
}

export default Component;

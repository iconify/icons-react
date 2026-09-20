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
		"content": `<style>.r-43bmeck {
  fill: currentColor;
  d: path("M17 9.6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.022q.047.516.185 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.257a5.5 5.5 0 0 0-1-.657M9 10a2 2 0 0 0-.268-1h2.536a2 2 0 0 0-.253 1.245a5.5 5.5 0 0 1 1.094-.7a1 1 0 0 1 1.331-.443a5.5 5.5 0 0 1 1.295-.097A2 2 0 0 0 13 8H7a2 2 0 1 0 2 2m-2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m12 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="r-43bmeck"/>`,
		"fallback": "fluent:voicemail-subtract-20-regular",
	});
}

export default Component;

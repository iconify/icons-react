import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z9pufq6cs {
  fill: currentColor;
  d: path("M9.5 3h1a3.5 3.5 0 0 1 3.424 4.231a3 3 0 0 0-.926-.83a2.5 2.5 0 0 0-2.334-2.396L10.5 4h-1a.5.5 0 0 1-.09-.992zm-.238 4.002a3 3 0 0 1 1.517-.915a.5.5 0 0 0-.279-.085L5.5 6l-.09.008A.5.5 0 0 0 5.5 7zM5.5 3h1a.5.5 0 0 1 .09.992L6.5 4h-1a2.5 2.5 0 0 0-.164 4.995L5.5 9h1a.5.5 0 0 1 .09.992L6.5 10h-1a3.5 3.5 0 0 1-.192-6.995zm8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 14.75 8 13.5A1.5 1.5 0 0 1 9.5 12h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="z9pufq6cs"/>`,
		"fallback": "fluent:link-person-16-regular",
	});
}

export default Component;

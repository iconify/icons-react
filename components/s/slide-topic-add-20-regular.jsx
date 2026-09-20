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
		"content": `<style>.v9uc7fb4d {
  fill: currentColor;
  d: path("M15.5 11a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5a.5.5 0 0 0-.5-.5M15 7a3 3 0 0 1 3 3v.6a5.5 5.5 0 0 0-1-.392V10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5.023q.047.516.185 1H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zm-5.5 5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm5-7a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z");
}
</style><path class="v9uc7fb4d"/>`,
		"fallback": "fluent:slide-topic-add-20-regular",
	});
}

export default Component;

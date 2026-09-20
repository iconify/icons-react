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
		"content": `<style>.m46za90wm {
  fill: currentColor;
  d: path("M15.056 14.183q.692 2.139.693 3.753c0 2.398-.939 4.247-2.5 4.247c-.8 0-1.078-.45-1.383-1.546l-.27-1.022q-.15-.538-.526-1.83a.3.3 0 0 0-.03-.066l-2.866-4.485a5.9 5.9 0 0 0-2.855-2.327l-1.257-.481A1.75 1.75 0 0 1 2.97 8.458l.686-3.538a2.25 2.25 0 0 1 1.673-1.758l8.25-2.021a4.75 4.75 0 0 1 5.733 3.44l1.574 6.172a2.75 2.75 0 0 1-2.665 3.43z");
}
</style><path class="m46za90wm"/>`,
		"fallback": "fluent:thumb-dislike-24-filled",
	});
}

export default Component;

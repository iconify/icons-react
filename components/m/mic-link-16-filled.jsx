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
		"content": `<style>.tzuartb2w {
  fill: currentColor;
  d: path("M4 4.5a2.5 2.5 0 0 1 5 0V8c0 .356-.074.694-.208 1H8.5c-1.134 0-2.142.54-2.782 1.375A2.5 2.5 0 0 1 4 8zm1.226 6.76A3.5 3.5 0 0 1 3 8a.5.5 0 0 0-1 0a4.5 4.5 0 0 0 3.009 4.247q.04-.52.217-.986M8.5 10a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="tzuartb2w"/>`,
		"fallback": "fluent:mic-link-16-filled",
	});
}

export default Component;

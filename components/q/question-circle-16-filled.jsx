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
		"content": `<style>.rev9juzva {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 10a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-7a2 2 0 0 0-2 2a.5.5 0 0 0 1 0a1 1 0 0 1 2 0c0 .255-.063.4-.144.515c-.103.148-.23.25-.453.464a2.8 2.8 0 0 0-.62.826c-.178.375-.283.839-.283 1.445a.5.5 0 0 0 1 0c0-.489.083-.8.186-1.017c.102-.216.24-.37.41-.534c.153-.147.401-.357.579-.61c.2-.286.325-.631.325-1.089a2 2 0 0 0-2-2");
}
</style><path class="rev9juzva"/>`,
		"fallback": "fluent:question-circle-16-filled",
	});
}

export default Component;

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
		"content": `<style>.s2k7qz-iv {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm3.502 6.503h-18.5l-.101.007a.75.75 0 0 0 .101 1.493h18.5l.102-.007a.75.75 0 0 0-.102-1.493M3.25 17a1.25 1.25 0 0 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="s2k7qz-iv"/>`,
		"fallback": "fluent:line-style-24-regular",
	});
}

export default Component;

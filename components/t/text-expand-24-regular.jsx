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
		"content": `<style>.ltpu4-5-h {
  fill: currentColor;
  d: path("M6.75 19.5h14.5a.75.75 0 0 0 .102-1.493L21.25 18H6.75a.75.75 0 0 0-.102 1.493zm0-15h14.5a.75.75 0 0 0 .102-1.493L21.25 3H6.75a.75.75 0 0 0-.102 1.493zm7 3.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM13 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m-2-2.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7z");
}
</style><path class="ltpu4-5-h"/>`,
		"fallback": "fluent:text-expand-24-regular",
	});
}

export default Component;

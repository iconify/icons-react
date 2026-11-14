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
		"content": `<style>.lp0wzt2fe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.5 1.25C19.9142 1.25 20.25 1.58579 20.25 2C20.25 2.41421 19.9142 2.75 19.5 2.75H17.75V22C17.75 22.4142 17.4142 22.75 17 22.75C16.5858 22.75 16.25 22.4142 16.25 22V2.75H13.25V22C13.25 22.4142 12.9142 22.75 12.5 22.75C12.0858 22.75 11.75 22.4142 11.75 22V13.75H10C6.54819 13.75 3.75 10.9518 3.75 7.5C3.75 4.04819 6.54819 1.25 10 1.25H19.5ZM10 2.75C7.37661 2.75 5.25 4.87661 5.25 7.5C5.25 10.1234 7.37661 12.25 10 12.25H11.75V2.75H10Z");
}
</style><path clip-rule="evenodd" class="lp0wzt2fe"/>`,
		"fallback": "solar:paragraph-outline",
	});
}

export default Component;

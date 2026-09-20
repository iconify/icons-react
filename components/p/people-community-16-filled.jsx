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
		"content": `<style>.a94m_ybya {
  fill: currentColor;
  d: path("M5.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m1 3.5A1.5 1.5 0 0 0 5 8.5V11a3 3 0 1 0 6 0V8.5A1.5 1.5 0 0 0 9.5 7zm-2.444.97A2.5 2.5 0 0 0 4 8.5V11a4 4 0 0 0 1.213 2.87l-.1.028a3 3 0 0 1-3.673-2.121l-.389-1.45A1.5 1.5 0 0 1 2.112 8.49zm6.73 5.9A4 4 0 0 0 12 11V8.5q-.001-.274-.056-.53l1.943.52a1.5 1.5 0 0 1 1.061 1.838l-.388 1.449a3 3 0 0 1-3.773 2.093M1 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m10 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}
</style><path class="a94m_ybya"/>`,
		"fallback": "fluent:people-community-16-filled",
	});
}

export default Component;

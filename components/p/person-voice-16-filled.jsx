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
		"content": `<style>.fn-an1qxk {
  fill: currentColor;
  d: path("M14.077 1.266a.5.5 0 1 0-.884.468C13.708 2.708 14 3.819 14 5c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 15 5a8 8 0 0 0-.923-3.734M7 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6m4.281.366a.5.5 0 0 1 .669.231c.353.727.55 1.542.55 2.403c0 .86-.197 1.676-.55 2.403a.5.5 0 1 1-.9-.438A4.5 4.5 0 0 0 11.5 5a4.5 4.5 0 0 0-.45-1.965a.5.5 0 0 1 .231-.669M12 10.5A1.5 1.5 0 0 0 10.5 9h-7A1.5 1.5 0 0 0 2 10.5v.5c0 1.971 1.86 4 5 4s5-2.029 5-4z");
}
</style><path class="fn-an1qxk"/>`,
		"fallback": "fluent:person-voice-16-filled",
	});
}

export default Component;

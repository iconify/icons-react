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
		"content": `<style>.set5mh_oj {
  fill: currentColor;
  d: path("M6.5 2A2.5 2.5 0 0 0 4 4.5V8a2.5 2.5 0 0 0 1.021 2.016A5.5 5.5 0 0 1 9 5.207V4.5A2.5 2.5 0 0 0 6.5 2M3 8a3.5 3.5 0 0 0 2.042 3.183q.076.603.274 1.16A4.5 4.5 0 0 1 2 8a.5.5 0 0 1 1 0m12 2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H8a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496l.643 1.8a.5.5 0 0 0 .935.018l.672-1.673l.209.39a.5.5 0 0 0 .44.264H13a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443L9.9 8.832a.5.5 0 0 0-.455-.332");
}
</style><path class="set5mh_oj"/>`,
		"fallback": "fluent:mic-pulse-16-filled",
	});
}

export default Component;

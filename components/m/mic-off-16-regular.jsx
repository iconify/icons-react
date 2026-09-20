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
		"content": `<style>.ki27i8bgr {
  fill: currentColor;
  d: path("m10.809 11.516l3.337 3.338a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L5.5 6.207V8a2.5 2.5 0 0 0 3.879 2.086l.717.717A3.5 3.5 0 0 1 4.5 8a.5.5 0 1 0-1 0a4.5 4.5 0 0 0 4 4.473V13.5a.5.5 0 1 0 1 0v-1.027a4.5 4.5 0 0 0 2.309-.957M8.647 9.354A1.5 1.5 0 0 1 6.5 8v-.793zM9.5 7.379V4.5a1.5 1.5 0 0 0-2.996-.117l-.822-.822A2.5 2.5 0 0 1 10.5 4.5V8q0 .18-.025.354zm2.561 2.561l-.764-.764c.132-.367.203-.763.203-1.176a.5.5 0 0 1 1 0c0 .695-.157 1.353-.439 1.94");
}
</style><path class="ki27i8bgr"/>`,
		"fallback": "fluent:mic-off-16-regular",
	});
}

export default Component;

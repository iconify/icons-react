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
		"content": `<style>.a37m8acgh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.405 16.75L6.127 2.589q-.04-.062-.092-.115q-.052-.052-.113-.094q-.061-.041-.129-.07t-.14-.044t-.146-.016t-.147.013q-.072.014-.141.042q-.068.027-.13.068q-.125.081-.209.205t-.114.269t-.003.293q.028.146.11.271l8.739 13.339H11.25q-1.036 0-1.768.732T8.75 19.25t.732 1.768t1.768.732h8.5q1.036 0 1.768-.732t.732-1.768t-.732-1.768t-1.768-.732zM1.75 18.5q0-2.75 2.75-2.75t2.75 2.75t-2.75 2.75t-2.75-2.75");
}
</style><path class="a37m8acgh"/>`,
		"fallback": "uix-solid:polo-mallet",
	});
}

export default Component;

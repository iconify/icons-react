import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bt1m4ibra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.188 27.119l11.041-2.027l2.027 11.041");
}

.pkzftpb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.642 15.54C35.492 9.007 30.832 4.5 23.094 4.5c-10.769 0-17.35 8.73-17.35 19.5s6.58 19.5 17.35 19.5c12.628 0 16.64-10.042 17.135-18.408");
}
</style><path class="pkzftpb3k"/><path class="bt1m4ibra"/>`,
		"fallback": "arcticons:studygo",
	});
}

export default Component;

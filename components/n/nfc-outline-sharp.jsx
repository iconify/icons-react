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
		"content": `<style>.hbxvoqnik {
  fill: currentColor;
  d: path("M8 16h8V8h-3.5q-.421 0-.71.29q-.29.289-.29.71v2.07q-.23.12-.404.344q-.173.223-.173.586q0 .46.299.768q.3.309.778.309q.421 0 .749-.309t.328-.768q0-.363-.179-.586q-.179-.224-.398-.345V9H15v6H9V9h1V8H8zm-4 4V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="hbxvoqnik"/>`,
		"fallback": "material-symbols-light:nfc-outline-sharp",
	});
}

export default Component;

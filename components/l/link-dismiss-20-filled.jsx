import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k62n3iw_j {
  fill: currentColor;
  d: path("M14 4a4 4 0 0 1 3.52 5.902a5.5 5.5 0 0 0-1.358-.646a2.5 2.5 0 0 0-1.998-3.75L14 5.5h-2a.75.75 0 0 1-.102-1.493L12 4zM8 4a.75.75 0 0 1 .102 1.493L8 5.5H6a2.5 2.5 0 0 0-.164 4.995L6 10.5h2a.75.75 0 0 1 .102 1.493L8 12H6a4 4 0 0 1-.2-7.995L6 4zM6.25 7.25h7.5a.75.75 0 0 1 .102 1.493l-.102.007h-7.5a.75.75 0 0 1-.102-1.493zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.732-1.06a.5.5 0 0 0-.707-.708l-1.061 1.06l-1.06-1.06a.5.5 0 0 0-.708.707l1.06 1.061l-1.06 1.06a.5.5 0 0 0 .707.708l1.061-1.06l1.06 1.06a.5.5 0 0 0 .708-.707l-1.06-1.061z");
}
</style><path class="k62n3iw_j"/>`,
		"fallback": "fluent:link-dismiss-20-filled",
	});
}

export default Component;

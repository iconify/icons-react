import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n3a2rbbgn {
  fill: currentColor;
  d: path("M9 4H5.754c-.888 0-1.703.308-2.346.824a2 2 0 0 0-.587.59a3.73 3.73 0 0 0-.817 2.336v12.5A3.75 3.75 0 0 0 5.754 24H22.25A3.75 3.75 0 0 0 26 20.25V7.75c0-.898-.315-1.721-.84-2.367a2 2 0 0 0-.544-.543A3.73 3.73 0 0 0 22.25 4H19v8h5.5v8.25a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25V12H9zm1.5 8h7V4h-7z");
}
</style><path class="n3a2rbbgn"/>`,
		"fallback": "fluent:panel-top-gallery-28-filled",
	});
}

export default Component;

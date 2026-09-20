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
		"content": `<style>.jug7fee1n {
  fill: currentColor;
  d: path("M6 14.089V9.933h12v4.155zm5.5-9.243V2.462h1v2.384zm6.816 2.608l-.708-.708L19.1 5.254l.708.708zM11.5 21.462v-2.385h1v2.385zm7.6-2.693l-1.492-1.492l.708-.708l1.492 1.493zM5.684 7.454L4.193 5.96l.708-.707l1.492 1.492zM4.9 18.769l-.708-.707l1.493-1.493l.707.708z");
}
</style><path class="jug7fee1n"/>`,
		"fallback": "material-symbols-light:wb-iridescent-sharp",
	});
}

export default Component;

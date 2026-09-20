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
		"content": `<style>.mqt56hbud {
  fill: currentColor;
  d: path("M12 15.516L8.485 12L12 8.485L15.516 12zm1.15 4.34q-.237.236-.534.357q-.299.122-.616.122t-.615-.122t-.535-.357l-6.763-6.764q-.218-.217-.339-.515t-.121-.596t.121-.596t.339-.516l6.757-6.757q.243-.243.538-.364T12 3.627t.618.121t.538.364l6.757 6.757q.218.218.339.516t.121.596t-.121.596t-.338.515zm-.823-1.002l6.546-6.546q.135-.135.135-.327t-.135-.327l-6.546-6.546q-.135-.135-.327-.125t-.327.144l-6.565 6.565q-.135.135-.125.308t.144.308l6.546 6.546q.135.135.327.135t.327-.135");
}
</style><path class="mqt56hbud"/>`,
		"fallback": "material-symbols-light:nearby-outline",
	});
}

export default Component;

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
		"content": `<style>.bnviigb_j {
  fill: currentColor;
  d: path("M16.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V4h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5m-10 4a.5.5 0 0 0 0-1H6v-.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V6zm9 9a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1h.5v.5a.5.5 0 1 0 1 0V15zm-2.066-8.434a1.914 1.914 0 0 0-2.707 0l-8.166 8.166a1.914 1.914 0 1 0 2.707 2.707l8.166-8.166a1.914 1.914 0 0 0 0-2.707m-2 .707a.914.914 0 0 1 1.293 1.293l-.477.477l-1.293-1.293zM10.25 8.457l1.293 1.293l-6.982 6.982a.914.914 0 0 1-1.293-1.292z");
}
</style><path class="bnviigb_j"/>`,
		"fallback": "fluent:wand-20-regular",
	});
}

export default Component;

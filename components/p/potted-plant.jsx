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
		"content": `<style>.vb3vnbcdk {
  fill: currentColor;
  d: path("M9.127 21q-.546 0-.975-.338q-.429-.339-.585-.88l-1.027-4.05h10.923l-1.03 4.052q-.155.54-.584.878q-.429.339-.975.339zM12 8.673q.192-1.961 1.577-3.346t3.346-1.558q-.173 1.808-1.415 3.16T12.5 8.63V11h7.154v2.346q0 .671-.472 1.143t-1.143.472H6q-.671 0-1.143-.471q-.473-.473-.473-1.144V11H11.5V8.63q-1.766-.35-2.998-1.692T7.077 3.77q1.961.173 3.346 1.558T12 8.673");
}
</style><path class="vb3vnbcdk"/>`,
		"fallback": "material-symbols-light:potted-plant",
	});
}

export default Component;

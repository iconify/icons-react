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
		"content": `<style>.tjuw8jo7p {
  fill: currentColor;
  d: path("M10 2q-.803.001-1.56.152a.5.5 0 0 0 .193.981a7 7 0 0 1 2.734 0a.5.5 0 0 0 .194-.98A8 8 0 0 0 10 2m4.445 1.348a.5.5 0 0 0-.556.83a7 7 0 0 1 1.932 1.933a.5.5 0 1 0 .831-.556a8 8 0 0 0-2.207-2.207m-8.334.83a.5.5 0 1 0-.556-.83a8 8 0 0 0-2.207 2.207a.5.5 0 1 0 .83.556a7 7 0 0 1 1.933-1.932M3.133 8.634a.5.5 0 0 0-.98-.194a8 8 0 0 0 0 3.122a.5.5 0 0 0 .98-.194a7 7 0 0 1 0-2.734m14.715-.194a.5.5 0 1 0-.981.194a7 7 0 0 1 0 2.734a.5.5 0 1 0 .98.194a8 8 0 0 0 0-3.122m-13.67 5.45a.5.5 0 1 0-.83.556a8 8 0 0 0 2.207 2.207a.5.5 0 1 0 .556-.83a7 7 0 0 1-1.932-1.933m12.474.556a.5.5 0 0 0-.83-.556a7 7 0 0 1-1.933 1.932a.5.5 0 1 0 .556.831a8 8 0 0 0 2.207-2.207m-8.019 2.422a.5.5 0 1 0-.194.98a8 8 0 0 0 3.122 0a.5.5 0 0 0-.194-.98a7 7 0 0 1-2.734 0M8 7.833a.75.75 0 0 1 1.125-.65l4.125 2.384a.5.5 0 0 1 0 .866l-4.125 2.383A.75.75 0 0 1 8 12.166z");
}
</style><path class="tjuw8jo7p"/>`,
		"fallback": "fluent:play-circle-hint-20-regular",
	});
}

export default Component;

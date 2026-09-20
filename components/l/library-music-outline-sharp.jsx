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
		"content": `<style>.v19786l5c {
  fill: currentColor;
  d: path("M12.191 14.692q.84 0 1.42-.58t.581-1.42v-5.73h2.731V5.423h-3.5v5.808q-.248-.27-.556-.404q-.307-.135-.675-.135q-.84 0-1.42.58t-.58 1.42t.58 1.42t1.42.58M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z");
}
</style><path class="v19786l5c"/>`,
		"fallback": "material-symbols-light:library-music-outline-sharp",
	});
}

export default Component;

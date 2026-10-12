import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/u/uai873b4f.css';
import '../../css/s/s_p56dbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="uai873b4f"/><path class="s_p56dbkn"/>`,
		"fallback": "lucide-extended:map-pin-plus-filled",
	});
}

export default Component;

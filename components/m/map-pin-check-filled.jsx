import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/a/auwtx0yen.css';
import '../../css/z/zthldachh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="auwtx0yen"/><path class="zthldachh"/>`,
		"fallback": "lucide-extended:map-pin-check-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3kvz9f2w.css';
import '../../css/k/kzr2ezdff.css';
import '../../css/y/yeo0byw9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z3kvz9f2w"/><path class="kzr2ezdff"/><path class="yeo0byw9c"/></g>`,
		"fallback": "withicons:table-sketch",
	});
}

export default Component;

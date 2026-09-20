import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrzvno.css';
import '../../css/y/ydovum.css';
import '../../css/g/ggwg4n.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-jkxijw.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrzvno ydovum"/><circle class="ggwg4n ydovum"/>`,
		"fallback": "line-md:map-marker-alt-twotone",
	});
}

export default Component;

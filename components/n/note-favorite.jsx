import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfl_-cgfn.css';
import '../../css/b/btnov_7jm.css';
import '../../css/x/xcwbr8b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vfl_-cgfn"/><path class="btnov_7jm"/><path class="xcwbr8b4u"/></g>`,
		"fallback": "reicon:note-favorite",
	});
}

export default Component;

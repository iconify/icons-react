import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8naembgy.css';
import '../../css/f/fow0mdbxw.css';
import '../../css/x/xaxzevb3j.css';
import '../../css/p/pz4dgsbkg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="u8naembgy"><path class="fow0mdbxw"/><path class="xaxzevb3j"/><path class="pz4dgsbkg"/></g>`,
		"fallback": "material-icon-theme:stitches",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nuv5q7dux.css';
import '../../css/l/lhllv9bxt.css';
import '../../css/d/dgn0rl2ke.css';
import '../../css/r/rdjwzdbya.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI1w0Tb7L"><g class="rohhhzb0l"><path clip-rule="evenodd" class="nuv5q7dux"/><path class="lhllv9bxt"/><path class="dgn0rl2ke"/><path class="rdjwzdbya"/></g></mask></defs><path mask="url(#SVGI1w0Tb7L)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pyramid-one",
	});
}

export default Component;

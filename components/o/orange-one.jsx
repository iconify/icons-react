import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k4f8z0o6z.css';
import '../../css/g/gstegiudt.css';
import '../../css/v/vl5wb9bal.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhfKK81em"><g class="wwvp95byt"><path class="k4f8z0o6z"/><path class="gstegiudt"/><path class="vl5wb9bal"/></g></mask></defs><path mask="url(#SVGhfKK81em)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:orange-one",
	});
}

export default Component;

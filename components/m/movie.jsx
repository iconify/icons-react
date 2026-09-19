import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tvgauyb5v.css';
import '../../css/b/b77-k2blg.css';
import '../../css/q/qczrjccey.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzfmErcyW"><g class="s9cl3zbei"><path class="tvgauyb5v"/><path class="b77-k2blg"/><path class="qczrjccey"/></g></mask></defs><path mask="url(#SVGzfmErcyW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:movie",
	});
}

export default Component;

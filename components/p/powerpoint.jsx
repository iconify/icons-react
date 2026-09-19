import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/u/uqqqq-ifh.css';
import '../../css/b/b-tt1pblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA76BUfcL"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="uqqqq-ifh"/><path class="b-tt1pblw"/></g></mask></defs><path mask="url(#SVGA76BUfcL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:powerpoint",
	});
}

export default Component;

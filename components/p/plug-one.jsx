import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aya53cc9i.css';
import '../../css/o/o93ugkl0y.css';
import '../../css/t/teo97w_bm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9os0Ud9d"><g class="s9cl3zbei"><rect class="aya53cc9i"/><path class="o93ugkl0y"/><path class="teo97w_bm"/></g></mask></defs><path mask="url(#SVG9os0Ud9d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:plug-one",
	});
}

export default Component;

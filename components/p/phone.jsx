import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qctwulbfr.css';
import '../../css/a/antt1e1xu.css';
import '../../css/o/ox3rhu33h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX9FZtb2j"><g class="s9cl3zbei"><path class="qctwulbfr"/><path class="antt1e1xu"/><path class="ox3rhu33h"/></g></mask></defs><path mask="url(#SVGX9FZtb2j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:phone",
	});
}

export default Component;

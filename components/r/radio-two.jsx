import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/h/hiquibbwj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdAUN9bOF"><g class="s9cl3zbei"><circle class="mzszod_2j"/><circle class="hiquibbwj"/></g></mask></defs><path mask="url(#SVGdAUN9bOF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:radio-two",
	});
}

export default Component;

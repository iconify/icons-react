import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tkhjv918g.css';
import '../../css/x/x6ii8xbvp.css';
import '../../css/u/uazjk4bqd.css';
import '../../css/g/ge0jrlzsw.css';
import '../../css/x/xqkcxlb-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2etO5cpj"><g class="s9cl3zbei"><path class="tkhjv918g"/><path class="x6ii8xbvp"/><circle class="uazjk4bqd"/><path class="ge0jrlzsw"/><path class="xqkcxlb-z"/></g></mask></defs><path mask="url(#SVG2etO5cpj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tape-measure",
	});
}

export default Component;

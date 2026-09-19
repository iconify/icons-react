import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/ykbumoigx.css';
import '../../css/k/kqqgs194l.css';
import '../../css/m/mlwciqb2o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpF3UGe0r"><g class="s9cl3zbei"><path class="ykbumoigx"/><path class="kqqgs194l"/><path class="mlwciqb2o"/></g></mask></defs><path mask="url(#SVGpF3UGe0r)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:viewfinder",
	});
}

export default Component;

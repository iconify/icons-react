import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hnla23biv {
  fill: var(--svg-color--fff, #fff);
  d: path("m15.272 21.598l-3.85 6.427c.278.183.561.36.854.519A11.9 11.9 0 0 0 18 30c2.078 0 4.033-.532 5.739-1.464c.293-.16.576-.336.854-.519l-3.855-6.427a4.5 4.5 0 0 1-2.738.942a4.5 4.5 0 0 1-2.728-.934m.847-7.71l-3.854-6.425q-.439.242-.854.52a11.99 11.99 0 0 0-5.385 9.518c-.008.166-.026.33-.026.499s.018.333.025.5h7.493c-.018-.166-.05-.329-.05-.5a4.53 4.53 0 0 1 2.651-4.112M22.532 18c0 .171-.032.334-.05.5h7.493c.007-.167.025-.331.025-.5s-.018-.333-.025-.5a11.99 11.99 0 0 0-5.382-9.516a13 13 0 0 0-.854-.52l-3.85 6.427A4.53 4.53 0 0 1 22.532 18");
}

.lut1c-n3l {
  cx: 18px;
  cy: 18px;
  r: 17px;
  fill: var(--svg-color--f4900c, #f4900c);
}

.scnu02w-h {
  cx: 18px;
  cy: 18px;
  r: 2px;
  fill: var(--svg-color--fff, #fff);
}
</style><circle class="lut1c-n3l"/><path class="hnla23biv"/><circle class="scnu02w-h"/>`,
		"fallback": "twemoji:radioactive",
	});
}

export default Component;
